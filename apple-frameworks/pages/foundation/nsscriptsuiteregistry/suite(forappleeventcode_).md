> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/suite(forappleeventcode:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/suite(forappleeventcode:))

# suite(forAppleEventCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the suite definition associated with the given four-character Apple event code, `code`.

## Declaration

```swift
func suite(forAppleEventCode appleEventCode: FourCharCode) -> String?
```

## See Also

### Getting Suite Information

- [suiteNames](suitenames.md): Returns the names of the suite definitions currently loaded by the application.

# suiteForAppleEventCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the suite definition associated with the given four-character Apple event code, `code`.

## Declaration

```objectivec
- (NSString *) suiteForAppleEventCode:(FourCharCode) appleEventCode;
```

## See Also

### Getting Suite Information

- [suiteNames](suitenames.md): Returns the names of the suite definitions currently loaded by the application.
