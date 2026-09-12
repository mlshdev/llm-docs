> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcinterface/setclasses(_:for:argumentindex:ofreply:)](https://developer.apple.com/documentation/foundation/nsxpcinterface/setclasses(_:for:argumentindex:ofreply:))

# setClasses(\_:for:argumentIndex:ofReply:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the classes that can appear within the (numerically) specified collection object argument to the specified method.

## Declaration

```swift
func setClasses(_ classes: Set<AnyHashable>, for sel: Selector, argumentIndex arg: Int, ofReply: Bool)
```

## Parameters

- `classes`: An `NSSet` containing Class objects—for example, `[MyObject class]`.
- `sel`: Specifies which method in the protocol is being configured.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you are allowing classes. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

If an argument to a method in your protocol is a collection class (for example, NSArray or NSDictionary), then you must explicitly specify the set of expected classes that may appear within that collection.

If the expected classes are all property list types, calling this method is optional; property list types are allowed by default inside collection objects. You may, however, call this method to further restrict the set of allowed classes.

# setClasses:forSelector:argumentIndex:ofReply: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the classes that can appear within the (numerically) specified collection object argument to the specified method.

## Declaration

```objectivec
- (void) setClasses:(NSSet<Class> *) classes forSelector:(SEL) sel argumentIndex:(NSUInteger) arg ofReply:(BOOL) ofReply;
```

## Parameters

- `classes`: An `NSSet` containing Class objects—for example, `[MyObject class]`.
- `sel`: Specifies which method in the protocol is being configured.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you are allowing classes. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

If an argument to a method in your protocol is a collection class (for example, NSArray or NSDictionary), then you must explicitly specify the set of expected classes that may appear within that collection.

If the expected classes are all property list types, calling this method is optional; property list types are allowed by default inside collection objects. You may, however, call this method to further restrict the set of allowed classes.
