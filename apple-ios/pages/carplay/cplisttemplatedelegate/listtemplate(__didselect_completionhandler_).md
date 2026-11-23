> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedelegate/listtemplate(_:didselect:completionhandler:)

# listTemplate(\_:didSelect:completionHandler:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

The user has selected an item in the list template.

## Declaration

```swift
func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem) async
```

## Parameters

- `listTemplate`: The list template containing this item
- `item`: The item selected by the user
- `completionHandler`: A completion block you must call after you have updated your UI.

<a id="discussion"></a>

## Discussion

Your app has an opportunity to perform any necessary operations to prepare for completing this item selection. The list template will display a spinner after a short delay.

You must call the completion block after your app has finished loading and updated its UI.

# listTemplate:didSelectListItem:completionHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

The user has selected an item in the list template.

## Declaration

```objectivec
- (void) listTemplate:(CPListTemplate *) listTemplate didSelectListItem:(CPListItem *) item completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `listTemplate`: The list template containing this item
- `item`: The item selected by the user
- `completionHandler`: A completion block you must call after you have updated your UI.

<a id="discussion"></a>

## Discussion

Your app has an opportunity to perform any necessary operations to prepare for completing this item selection. The list template will display a spinner after a short delay.

You must call the completion block after your app has finished loading and updated its UI.
