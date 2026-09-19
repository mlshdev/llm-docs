> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phcontenteditingoutput/init(contenteditinginput:)

# init(contentEditingInput:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Creates an editing output from the specified editing input.

## Declaration

```swift
init(contentEditingInput: PHContentEditingInput)
```

## Parameters

- `contentEditingInput`: An object providing information about the asset to be edited.

<a id="return-value"></a>

## Return Value

An initialized content editing output.

<a id="Discussion"></a>

## Discussion

To complete the edit, use the [renderedContentURL](renderedcontenturl.md) property to provide the edited asset content. Then, use the [PHAssetChangeRequest](../phassetchangerequest.md) class or [PHContentEditingController](../../photosui/phcontenteditingcontroller.md) protocol to commit the edit to storage.

# initWithContentEditingInput: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Creates an editing output from the specified editing input.

## Declaration

```objectivec
- (instancetype) initWithContentEditingInput:(PHContentEditingInput *) contentEditingInput;
```

## Parameters

- `contentEditingInput`: An object providing information about the asset to be edited.

<a id="return-value"></a>

## Return Value

An initialized content editing output.

<a id="Discussion"></a>

## Discussion

To complete the edit, use the [renderedContentURL](renderedcontenturl.md) property to provide the edited asset content. Then, use the [PHAssetChangeRequest](../phassetchangerequest.md) class or [PHContentEditingController](../../photosui/phcontenteditingcontroller.md) protocol to commit the edit to storage.
