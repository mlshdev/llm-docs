> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagelivelayout/init(alternatelayout:)](https://developer.apple.com/documentation/messages/msmessagelivelayout/init(alternatelayout:))

# init(alternateLayout:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Initializes a new live layout using the provided alternate layout.

## Declaration

```swift
init(alternateLayout: MSMessageTemplateLayout)
```

<a id="Discussion"></a>

## Discussion

The alternate layout is required to represent your message on devices that don’t have your iMessage app installed, or on devices that aren’t running iOS 11 or later.

# initWithAlternateLayout: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Initializes a new live layout using the provided alternate layout.

## Declaration

```objectivec
- (instancetype) initWithAlternateLayout:(MSMessageTemplateLayout *) alternateLayout;
```

<a id="Discussion"></a>

## Discussion

The alternate layout is required to represent your message on devices that don’t have your iMessage app installed, or on devices that aren’t running iOS 11 or later.
