> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(array:)-9rh7](https://developer.apple.com/documentation/foundation/nsarray/init(array:)-9rh7)

# init(array:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array by placing in it the objects contained in a given array.

## Declaration

```swift
@nonobjc convenience init(array anArray: NSArray)
```

<a id="return-value"></a>

## Return Value

An array initialized to contain the objects in \`anArray\`\`. The returned object might be different than the original receiver.

<a id="discussion"></a>

## Discussion

Discussion: After an immutable array has been initialized in this way, it cannot be modified.
