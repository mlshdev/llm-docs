> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscanner/scannerwithstring:](https://developer.apple.com/documentation/foundation/nsscanner/scannerwithstring:)

# scannerWithString:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSScanner` object that scans a given string.

## Declaration

```objectivec
+ (instancetype) scannerWithString:(NSString *) string;
```

## Parameters

- `string`: The string to scan.

<a id="return-value"></a>

## Return Value

An `NSScanner` object that scans `aString`.

<a id="Discussion"></a>

## Discussion

Sets the string to scan by invoking [initWithString:](../scanner/init%28string_%29.md) with `aString`.

## See Also

### Related Documentation

- [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i)

### Creating a Scanner

- [localizedScannerWithString:](../scanner/localizedscanner%28with_%29.md): Returns an `NSScanner` object that scans a given string according to the user’s default locale.
- [initWithString:](../scanner/init%28string_%29.md): Returns an `NSScanner` object initialized to scan a given string.
