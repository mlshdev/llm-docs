> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingcontext/init(livephotoeditinginput:)](https://developer.apple.com/documentation/photos/phlivephotoeditingcontext/init(livephotoeditinginput:))

# init(livePhotoEditingInput:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a Live Photo editing context for the specified editing input.

## Declaration

```swift
init?(livePhotoEditingInput livePhotoInput: PHContentEditingInput)
```

## Parameters

- `livePhotoInput`: A content editing input object representing the Live Photo for which to perform editing.

<a id="return-value"></a>

## Return Value

A new Live Photo editing context, or `nil` if the provided content editing input does not represent a Live Photo.

<a id="Discussion"></a>

## Discussion

In an app using the Photos framework, you obtain a [PHContentEditingInput](../phcontenteditinginput.md) object by calling [requestContentEditingInput(with:completionHandler:)](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method of a [PHAsset](../phasset.md) object that you’ve previously fetched.

In a photo editing extension that runs within the Photos app, your extension’s main view controller (which adopts the [PHContentEditingController](../../photosui/phcontenteditingcontroller.md) protocol) receives a [PHContentEditingInput](../phcontenteditinginput.md) object when the user chooses to edit a Live Photo with your extension.

You can create a Live Photo editing context only from [PHContentEditingInput](../phcontenteditinginput.md) object that represents a Live Photo. Use the [livePhoto](../phcontenteditinginput/livephoto.md) property of the editing input to verify that it has live Photo content.

# initWithLivePhotoEditingInput: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a Live Photo editing context for the specified editing input.

## Declaration

```objectivec
- (instancetype) initWithLivePhotoEditingInput:(PHContentEditingInput *) livePhotoInput;
```

## Parameters

- `livePhotoInput`: A content editing input object representing the Live Photo for which to perform editing.

<a id="return-value"></a>

## Return Value

A new Live Photo editing context, or `nil` if the provided content editing input does not represent a Live Photo.

<a id="Discussion"></a>

## Discussion

In an app using the Photos framework, you obtain a [PHContentEditingInput](../phcontenteditinginput.md) object by calling [requestContentEditingInputWithOptions:completionHandler:](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method of a [PHAsset](../phasset.md) object that you’ve previously fetched.

In a photo editing extension that runs within the Photos app, your extension’s main view controller (which adopts the [PHContentEditingController](../../photosui/phcontenteditingcontroller.md) protocol) receives a [PHContentEditingInput](../phcontenteditinginput.md) object when the user chooses to edit a Live Photo with your extension.

You can create a Live Photo editing context only from [PHContentEditingInput](../phcontenteditinginput.md) object that represents a Live Photo. Use the [livePhoto](../phcontenteditinginput/livephoto.md) property of the editing input to verify that it has live Photo content.
