> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldactiondelegate/handle(action:for:completionhandler:)-4jgek](https://developer.apple.com/documentation/managedsettings/shieldactiondelegate/handle(action:for:completionhandler:)-4jgek)

# handle(action:for:completionHandler:)

**Framework:** Managed Settings  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Allows the extension to respond to a user action when the system displays a shield over an application.

## Declaration

```swift
func handle(action: ShieldAction, for application: ApplicationToken, completionHandler: @escaping (ShieldActionResponse) -> Void)
```

## Parameters

- `action`: The user’s action.
- `application`: The application that the shield covers.
- `completionHandler`: A closure for your extension to call after you handle the user’s action.

## See Also

### Responding to someone’s action

- [handle(action:for:completionHandler:)](handle%28action_for_completionhandler_%29-9hcqc.md): Allows the extension to respond to a user action when the system displays a shield over an application or website because of its category.
- [handle(action:for:completionHandler:)](handle%28action_for_completionhandler_%29-4tqna.md): Allows the extension to respond to a user action when the system displays a shield over a website.
