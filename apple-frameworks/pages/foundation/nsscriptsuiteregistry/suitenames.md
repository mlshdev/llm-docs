> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/suitenames

# suiteNames (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the names of the suite definitions currently loaded by the application.

## Declaration

```swift
var suiteNames: [String] { get }
```

## See Also

### Getting Suite Information

- [suite(forAppleEventCode:)](suite%28forappleeventcode_%29.md): Returns the name of the suite definition associated with the given four-character Apple event code, `code`.

# suiteNames (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the names of the suite definitions currently loaded by the application.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * suiteNames;
```

## See Also

### Getting Suite Information

- [suiteForAppleEventCode:](suite%28forappleeventcode_%29.md): Returns the name of the suite definition associated with the given four-character Apple event code, `code`.
