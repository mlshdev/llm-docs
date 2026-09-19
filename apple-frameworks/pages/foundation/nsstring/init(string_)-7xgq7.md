> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsstring/init(string:)-7xgq7

# init(string:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by copying the characters from another given string.

## Declaration

```swift
@nonobjc convenience init(string aString: NSString)
```

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by copying the characters from `aString`. The returned object may be different from the original receiver.
