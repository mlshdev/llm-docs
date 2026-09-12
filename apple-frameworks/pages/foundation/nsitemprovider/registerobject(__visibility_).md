> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerobject(_:visibility:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerobject(_:visibility:))

# registerObject(\_:visibility:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.

## Declaration

```swift
func registerObject(_ object: any NSItemProviderWriting, visibility: NSItemProviderRepresentationVisibility)
```

<a id="Discussion"></a>

## Discussion

If a representation for a given UTI is already registered, it is preserved (specifically, duplicate representations are ignored).

## See Also

### Registering objects

- [registerObject(ofClass:visibility:loadHandler:)](registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](registerobject%28ofclass_visibility_loadhandler_%29-133rx.md): Lazily adds representations of a specified object type to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [register(\_:)](register%28__%29.md): Adds representations of a specified transferable type to an item provider.

# registerObject:visibility: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.

## Declaration

```objectivec
- (void) registerObject:(id<NSItemProviderWriting>) object visibility:(NSItemProviderRepresentationVisibility) visibility;
```

<a id="Discussion"></a>

## Discussion

If a representation for a given UTI is already registered, it is preserved (specifically, duplicate representations are ignored).

## See Also

### Registering objects

- [registerObjectOfClass:visibility:loadHandler:](registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
