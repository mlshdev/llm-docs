> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed(_:)](https://developer.apple.com/documentation/carplay/cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed(_:))

# searchTemplateSearchButtonPressed(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user tapped the keyboard’s search button.

## Declaration

```swift
optional func searchTemplateSearchButtonPressed(_ searchTemplate: CPSearchTemplate)
```

## Parameters

- `searchTemplate`: The current search template.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should retrieve the search result, and display a [CPListTemplate](../cplisttemplate.md) containing the search result items by calling [pushTemplate(\_:animated:completion:)](../cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md).

# searchTemplateSearchButtonPressed: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user tapped the keyboard’s search button.

## Declaration

```objectivec
- (void) searchTemplateSearchButtonPressed:(CPSearchTemplate *) searchTemplate;
```

## Parameters

- `searchTemplate`: The current search template.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should retrieve the search result, and display a [CPListTemplate](../cplisttemplate.md) containing the search result items by calling [pushTemplate:animated:completion:](../cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md).
