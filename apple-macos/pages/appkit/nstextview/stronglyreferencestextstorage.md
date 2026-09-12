> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/stronglyreferencestextstorage](https://developer.apple.com/documentation/appkit/nstextview/stronglyreferencestextstorage)

# stronglyReferencesTextStorage (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether instances of the class operate in the object ownership policy.

## Declaration

```swift
class var stronglyReferencesTextStorage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

Under the policy, each text view strongly retains its text storage and its text container weakly references the view. In addition, the text views are compatible with `__weak storage`.

## See Also

### Accessing text system objects

- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# stronglyReferencesTextStorage (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether instances of the class operate in the object ownership policy.

## Declaration

```objectivec
@property (class, readonly) BOOL stronglyReferencesTextStorage;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

Under the policy, each text view strongly retains its text storage and its text container weakly references the view. In addition, the text views are compatible with `__weak storage`.

## See Also

### Accessing text system objects

- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
