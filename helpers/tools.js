function extractGlyphs(json) {
  const glyphs = [];
  json.forEach(tag => {
    if (tag.tag == 'glyph') glyphs.push(tag);
  });
  return glyphs;
}

module.exports = {
  extractGlyphs,
  extractGlyphsAsync: json => Promise.resolve(extractGlyphs(json)),
}