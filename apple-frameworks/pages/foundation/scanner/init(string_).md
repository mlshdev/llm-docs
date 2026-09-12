> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/init(string:)](https://developer.apple.com/documentation/foundation/scanner/init(string:))

# init(string:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSScanner` object initialized to scan a given string.

## Declaration

```swift
init(string: String)
```

## Parameters

- `string`: The string to scan.

<a id="return-value"></a>

## Return Value

An `NSScanner` object initialized to scan `aString` from the beginning. The returned object might be different than the original receiver.

## See Also

### Creating a Scanner

- [localizedScanner(with:)](localizedscanner%28with_%29.md): Returns an `NSScanner` object that scans a given string according to the user’s default locale.

# initWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSScanner` object initialized to scan a given string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string;
```

## Parameters

- `string`: The string to scan.

<a id="return-value"></a>

## Return Value

An `NSScanner` object initialized to scan `aString` from the beginning. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [scannerWithString:](../nsscanner/scannerwithstring_.md): Returns an `NSScanner` object that scans a given string.

### Creating a Scanner

- [scannerWithString:](../nsscanner/scannerwithstring_.md): Returns an `NSScanner` object that scans a given string.
- [localizedScannerWithString:](localizedscanner%28with_%29.md): Returns an `NSScanner` object that scans a given string according to the user’s default locale.
