> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_glyph_count](https://developer.apple.com/documentation/hvf/hvf_glyph_count)

# HVF_glyph_count

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Returns the number of glyphs (suitable for rendering) in the `hvgl` table.

## Declaration

```objectivec
uint32_t HVF_glyph_count(HVFPartRenderer *renderer);
```

<a id="discussion"></a>

## Discussion

The glyphs are always a prefix of all parts.
