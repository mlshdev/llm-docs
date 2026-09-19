> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/insertcollaborationitemprovider(_:completionhandler:)

# insertCollaborationItemProvider(\_:completionHandler:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

## Declaration

```swift
func insertCollaborationItemProvider(_ itemProvider: NSItemProvider, completionHandler: @escaping (Bool) -> Void)
```

```swift
func insertCollaborationItemProvider(_ itemProvider: NSItemProvider) async -> Bool
```

## Parameters

- `itemProvider`: Specifying the intended content for collaboration

<a id="discussion"></a>

## Discussion

Returns YES if the item provider was added to the composition successfully.

If the return value is YES, the itemProvider was added to the composition.  The itemProvider must be non-nil.

# insertCollaborationItemProvider:completionHandler: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (void) insertCollaborationItemProvider:(NSItemProvider *) itemProvider completionHandler:(void (^)(BOOL )) completionHandler;
```

## Parameters

- `itemProvider`: Specifying the intended content for collaboration

<a id="discussion"></a>

## Discussion

Returns YES if the item provider was added to the composition successfully.

If the return value is YES, the itemProvider was added to the composition.  The itemProvider must be non-nil.
