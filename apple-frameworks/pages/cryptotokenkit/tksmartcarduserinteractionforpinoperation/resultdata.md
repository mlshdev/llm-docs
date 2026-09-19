> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/resultdata

# resultData (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The returned data without SW1-SW2 bytes, if any.

## Declaration

```swift
var resultData: Data? { get set }
```

## See Also

### Accessing Response Data

- [resultSW](resultsw.md): The SW1-SW2 status bytes.

# resultData (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The returned data without SW1-SW2 bytes, if any.

## Declaration

```objectivec
@property (nullable) NSData * resultData;
```

## See Also

### Accessing Response Data

- [resultSW](resultsw.md): The SW1-SW2 status bytes.
