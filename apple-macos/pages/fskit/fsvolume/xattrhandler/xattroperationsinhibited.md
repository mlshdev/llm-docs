> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler/xattroperationsinhibited

# xattrOperationsInhibited (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```swift
optional var xattrOperationsInhibited: Bool { get }
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

# xattrOperationsInhibited (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```objectivec
@property (readonly) BOOL xattrOperationsInhibited;
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.
