> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldactionresponse/defer](https://developer.apple.com/documentation/managedsettings/shieldactionresponse/defer)

# ShieldActionResponse.defer

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An instruction to defer a response to the action.

## Declaration

```swift
case `defer`
```

<a id="discussion"></a>

## Discussion

Use `defer` to delay an immediate response to a shield action; for example, if your extension on a client device sends a remote request to a parent or guardian’s device. When you specify this option, the shield redraws its UI, which gives your extension on the client device an opportunity to reconfigure the shield’s appearance.

## See Also

### Responses

- [ShieldActionResponse.close](close.md): An instruction for the system to close the current application or web browser.
- [ShieldActionResponse.none](none.md): An instruction that the system doesn’t need to take any additional action on behalf of the extension.
