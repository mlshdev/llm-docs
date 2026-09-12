> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextension/handlerforcontentblocker()](https://developer.apple.com/documentation/mailkit/meextension/handlerforcontentblocker())

# handlerForContentBlocker() (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that provides rules that the message viewer uses to block content.

## Declaration

```swift
optional func handlerForContentBlocker() -> any MEContentBlocker
```

<a id="return-value"></a>

## Return Value

An object that provides rules for blocking content.

# handlerForContentBlocker (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that provides rules that the message viewer uses to block content.

## Declaration

```objectivec
- (id<MEContentBlocker>) handlerForContentBlocker;
```

<a id="return-value"></a>

## Return Value

An object that provides rules for blocking content.
