> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcinterface/classes(for:argumentindex:ofreply:)](https://developer.apple.com/documentation/foundation/nsxpcinterface/classes(for:argumentindex:ofreply:))

# classes(for:argumentIndex:ofReply:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current list of allowed classes that can appear within the specified collection object argument to the specified method.

## Declaration

```swift
func classes(for sel: Selector, argumentIndex arg: Int, ofReply: Bool) -> Set<AnyHashable>
```

## Parameters

- `sel`: Specifies which method in the protocol you want information about.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you want to obtain the current set of allowed classes. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

See [setClasses(\_:for:argumentIndex:ofReply:)](setclasses%28__for_argumentindex_ofreply_%29.md) for more explanation.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)

# classesForSelector:argumentIndex:ofReply: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current list of allowed classes that can appear within the specified collection object argument to the specified method.

## Declaration

```objectivec
- (NSSet<Class> *) classesForSelector:(SEL) sel argumentIndex:(NSUInteger) arg ofReply:(BOOL) ofReply;
```

## Parameters

- `sel`: Specifies which method in the protocol you want information about.
- `arg`: Specifies the position (starting at index 0) of the parameter for which you want to obtain the current set of allowed classes. This may be either the position of a parameter in the method itself or the position in its reply block.
- `ofReply`: Pass [true](https://developer.apple.com/documentation/swift/true) if `arg` is an index into the parameters of the reply block, or [false](https://developer.apple.com/documentation/swift/false) if it is an index into the parameters of the method itself.

<a id="Discussion"></a>

## Discussion

See [setClasses:forSelector:argumentIndex:ofReply:](setclasses%28__for_argumentindex_ofreply_%29.md) for more explanation.

## See Also

### Related Documentation

- [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)
