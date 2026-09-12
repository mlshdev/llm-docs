> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/toint64()](https://developer.apple.com/documentation/javascriptcore/jsvalue/toint64())

# toInt64() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```swift
func toInt64() -> Int64
```

<a id="discussion"></a>

## Discussion

Convert a JSValue to a int64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the value is truncated to an int64_t.

# toInt64 (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 9.0+ · visionOS 2.0+

## Declaration

```objectivec
- (int64_t) toInt64;
```

<a id="discussion"></a>

## Discussion

Convert a JSValue to a int64_t.

The JSValue is converted to an integer according to the rules specified by the JavaScript language. If the value is a BigInt, then the value is truncated to an int64_t.
