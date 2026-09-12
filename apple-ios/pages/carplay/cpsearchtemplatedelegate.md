> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsearchtemplatedelegate](https://developer.apple.com/documentation/carplay/cpsearchtemplatedelegate)

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

### Updating Search Text

- [searchTemplate(\_:updatedSearchText:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md): Tells the delegate that the user updated the search criteria text.

### Selecting a Search Result Item

- [searchTemplate(\_:selectedResult:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md): Tells the delegate that the user selected an item from the search result.

### Pressing the Search Button

- [searchTemplateSearchButtonPressed(\_:)](cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed%28__%29.md): Tells the delegate that the user tapped the keyboard’s search button.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Providing a Search Template Delegate

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

### Updating Search Text

- [searchTemplate:updatedSearchText:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md): Tells the delegate that the user updated the search criteria text.

### Selecting a Search Result Item

- [searchTemplate:selectedResult:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md): Tells the delegate that the user selected an item from the search result.

### Pressing the Search Button

- [searchTemplateSearchButtonPressed:](cpsearchtemplatedelegate/searchtemplatesearchbuttonpressed%28__%29.md): Tells the delegate that the user tapped the keyboard’s search button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Providing a Search Template Delegate

- [delegate](cpsearchtemplate/delegate.md): The object that serves as the search template’s delegate.
