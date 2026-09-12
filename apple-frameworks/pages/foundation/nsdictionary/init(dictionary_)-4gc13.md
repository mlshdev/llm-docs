> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(dictionary:)-4gc13](https://developer.apple.com/documentation/foundation/nsdictionary/init(dictionary:)-4gc13)

# init(dictionary:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary and adds to it objects from another given dictionary.

## Declaration

```swift
@objc(__swiftInitWithDictionary_NSDictionary:) dynamic convenience init(dictionary otherDictionary: NSDictionary)
```

<a id="return-value"></a>

## Return Value

An initialized dictionary–which might be different than the original receiver–containing the keys and values found in `otherDictionary`.
