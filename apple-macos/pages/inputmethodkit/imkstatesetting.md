> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkstatesetting](https://developer.apple.com/documentation/inputmethodkit/imkstatesetting)

# IMKStateSetting (Swift)

**Framework:** InputMethodKit  
**Kind:** Protocol  
**Availability:** macOS 10.5+

The `IMKStateSetting` protocol defines methods for setting or accessing values that indicate the state of an input method.

## Declaration

```swift
protocol IMKStateSetting
```

## Topics

### Activating and Deactivating the Server

- [activateServer(\_:)](imkstatesetting/activateserver%28__%29.md): Activates the input method server.
- [deactivateServer(\_:)](imkstatesetting/deactivateserver%28__%29.md): Deactivates the input method server.

### Showing a Preferences Window

- [showPreferences(\_:)](imkstatesetting/showpreferences%28__%29.md): Displays a preferences window.

### Getting the Supported Events

- [recognizedEvents(\_:)](imkstatesetting/recognizedevents%28__%29.md): Returns an unsigned integer that contains a union of event masks

### Getting the Mode Dictionary

- [modes(\_:)](imkstatesetting/modes%28__%29.md): Returns the modes dictionary associated with the input method.

### Getting and Setting Values

- [value(forTag:client:)](imkstatesetting/value%28fortag_client_%29.md): Returns a value object whose key is the provided tag.
- [setValue(\_:forTag:client:)](imkstatesetting/setvalue%28__fortag_client_%29.md): Set the value for the provided key.

## Relationships

### Conforming Types

- [IMKInputController](imkinputcontroller.md)

## See Also

### Protocols

- [IMKMouseHandling](imkmousehandling.md): The `IMKMouseHandling` protocol defines methods that your input method can implement to handle mouse events.
- [IMKServerInput](imkserverinput.md): `IMKServerInput` is an informal protocol that defines methods for receiving text events. This is intentionally not a formal protocol because there are three ways to receive events. An input method chooses one of the following approaches and implements the appropriate methods:

# IMKStateSetting (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Protocol  
**Availability:** macOS 10.5+

The `IMKStateSetting` protocol defines methods for setting or accessing values that indicate the state of an input method.

## Declaration

```objectivec
@protocol IMKStateSetting
```

## Topics

### Activating and Deactivating the Server

- [activateServer:](imkstatesetting/activateserver%28__%29.md): Activates the input method server.
- [deactivateServer:](imkstatesetting/deactivateserver%28__%29.md): Deactivates the input method server.

### Showing a Preferences Window

- [showPreferences:](imkstatesetting/showpreferences%28__%29.md): Displays a preferences window.

### Getting the Supported Events

- [recognizedEvents:](imkstatesetting/recognizedevents%28__%29.md): Returns an unsigned integer that contains a union of event masks

### Getting the Mode Dictionary

- [modes:](imkstatesetting/modes%28__%29.md): Returns the modes dictionary associated with the input method.

### Getting and Setting Values

- [valueForTag:client:](imkstatesetting/value%28fortag_client_%29.md): Returns a value object whose key is the provided tag.
- [setValue:forTag:client:](imkstatesetting/setvalue%28__fortag_client_%29.md): Set the value for the provided key.

## Relationships

### Conforming Types

- [IMKInputController](imkinputcontroller.md)

## See Also

### Protocols

- [IMKMouseHandling](imkmousehandling.md): The `IMKMouseHandling` protocol defines methods that your input method can implement to handle mouse events.
- [IMKServerInput](imkserverinput.md): `IMKServerInput` is an informal protocol that defines methods for receiving text events. This is intentionally not a formal protocol because there are three ways to receive events. An input method chooses one of the following approaches and implements the appropriate methods:
