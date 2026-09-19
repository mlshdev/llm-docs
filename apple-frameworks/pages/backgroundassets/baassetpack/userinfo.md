> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/baassetpack/userinfo

# userInfo

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

JSON-encoded custom information that’s associated with the asset pack.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * userInfo;
```

<a id="discussion"></a>

## Discussion

This property is `nil` for Apple-hosted asset packs.
