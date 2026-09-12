> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldactionresponse](https://developer.apple.com/documentation/managedsettings/shieldactionresponse)

# ShieldActionResponse

**Framework:** Managed Settings  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constants your extension that handles shield actions can use to tell the system how to respond to an action.

## Declaration

```swift
enum ShieldActionResponse
```

## Topics

### Responses

- [ShieldActionResponse.close](shieldactionresponse/close.md): An instruction for the system to close the current application or web browser.
- [ShieldActionResponse.defer](shieldactionresponse/defer.md): An instruction to defer a response to the action.
- [ShieldActionResponse.none](shieldactionresponse/none.md): An instruction that the system doesn’t need to take any additional action on behalf of the extension.

### Enumeration Cases

- [ShieldActionResponse.openParentalControlsApp](shieldactionresponse/openparentalcontrolsapp.md): An instruction for the system to open your parental controls app that is responsible for shielding the application or web browser

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Handling shield actions

- [ShieldAction](shieldaction.md): Constants that describe a user’s action for your extension to handle.
