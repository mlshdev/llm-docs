> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/localizedscanner(with:)](https://developer.apple.com/documentation/foundation/scanner/localizedscanner(with:))

# localizedScanner(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSScanner` object that scans a given string according to the user’s default locale.

## Declaration

```swift
class func localizedScanner(with string: String) -> Any
```

## Parameters

- `string`: The string to scan.

<a id="return-value"></a>

## Return Value

An `NSScanner` object that scans `aString` according to the user’s default locale.

<a id="Discussion"></a>

## Discussion

Sets the string to scan by invoking [init(string:)](init%28string_%29.md) with `aString`. The locale is set with [Scanner](../scanner.md).

## See Also

### Creating a Scanner

- [init(string:)](init%28string_%29.md): Returns an `NSScanner` object initialized to scan a given string.

# localizedScannerWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSScanner` object that scans a given string according to the user’s default locale.

## Declaration

```objectivec
+ (id) localizedScannerWithString:(NSString *) string;
```

## Parameters

- `string`: The string to scan.

<a id="return-value"></a>

## Return Value

An `NSScanner` object that scans `aString` according to the user’s default locale.

<a id="Discussion"></a>

## Discussion

Sets the string to scan by invoking [initWithString:](init%28string_%29.md) with `aString`. The locale is set with [NSScanner](../scanner.md).

## See Also

### Creating a Scanner

- [scannerWithString:](../nsscanner/scannerwithstring_.md): Returns an `NSScanner` object that scans a given string.
- [initWithString:](init%28string_%29.md): Returns an `NSScanner` object initialized to scan a given string.
