> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocatehandler/ispreallocateinhibited](https://developer.apple.com/documentation/fskit/fsvolume/preallocatehandler/ispreallocateinhibited)

# isPreallocateInhibited (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```swift
optional var isPreallocateInhibited: Bool { get }
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

# preallocateInhibited (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```objectivec
@property (readonly, getter=isPreallocateInhibited) BOOL preallocateInhibited;
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.
