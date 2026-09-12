> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/set](https://developer.apple.com/documentation/foundation/nsorderedset/set)

# set (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of the set containing the contents of the ordered set.

## Declaration

```swift
var set: Set<AnyHashable> { get }
```

<a id="Discussion"></a>

## Discussion

This returns a proxy object for the receiving ordered set, which acts like an immutable set.

While you cannot mutate the ordered set through this proxy, mutations to the original ordered set will be reflected in the proxy and it will appear to change spontaneously, because a copy of the ordered set is not being made.

## See Also

### Converting Other Collections

- [array](array.md): A representation of the ordered set as an array.

# set (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of the set containing the contents of the ordered set.

## Declaration

```objectivec
@property (strong, readonly) NSSet<id> * set;
```

<a id="Discussion"></a>

## Discussion

This returns a proxy object for the receiving ordered set, which acts like an immutable set.

While you cannot mutate the ordered set through this proxy, mutations to the original ordered set will be reflected in the proxy and it will appear to change spontaneously, because a copy of the ordered set is not being made.

## See Also

### Converting Other Collections

- [array](array.md): A representation of the ordered set as an array.
