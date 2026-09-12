> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/touint64()](https://developer.apple.com/documentation/javascriptcore/jsvalue/touint64())

# toUInt64() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func toUInt64() -> UInt64
```

<a id="discussion"></a>

## Discussion

Convert a JSValue to a uint64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the value is truncated to a uint64_t.

# toUInt64 (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
- (uint64_t) toUInt64;
```

<a id="discussion"></a>

## Discussion

Convert a JSValue to a uint64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the value is truncated to a uint64_t.
