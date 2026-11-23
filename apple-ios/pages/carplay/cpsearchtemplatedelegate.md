> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsearchtemplatedelegate

# CPSearchTemplateDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface for an object that serves as the search template’s delegate.

## Declaration

```swift
@MainActor protocol CPSearchTemplateDelegate : NSObjectProtocol
```

## Topics

### Updating the search text

- [searchTemplate(\_:updatedSearchText:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md): Tells the delegate that the user updated the search criteria text.

### Selecting a search result

- [searchTemplate(\_:selectedResult:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md): Tells the delegate that the user selected an item from the search result.

### Handling button presses

- [searchTemplateSearchButtonPressed(\_:)](cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed%28__%29.md): Tells the delegate that the user tapped the keyboard’s search button.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing search behaviors

- [delegate](cpsearchtemplate/delegate.md): The object that serves as the search template’s delegate.

# CPSearchTemplateDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface for an object that serves as the search template’s delegate.

## Declaration

```objectivec
@protocol CPSearchTemplateDelegate <NSObject>
```

## Topics

### Updating the search text

- [searchTemplate:updatedSearchText:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md): Tells the delegate that the user updated the search criteria text.

### Selecting a search result

- [searchTemplate:selectedResult:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md): Tells the delegate that the user selected an item from the search result.

### Handling button presses

- [searchTemplateSearchButtonPressed:](cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed%28__%29.md): Tells the delegate that the user tapped the keyboard’s search button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing search behaviors

- [delegate](cpsearchtemplate/delegate.md): The object that serves as the search template’s delegate.
