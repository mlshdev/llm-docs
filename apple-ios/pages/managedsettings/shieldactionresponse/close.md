> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/shieldactionresponse/close

# ShieldActionResponse.close

**Framework:** Managed Settings  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An instruction for the system to close the current application or web browser.

## Declaration

```swift
case close
```

## See Also

### Responses

- [ShieldActionResponse.defer](defer.md): An instruction to defer a response to the action.
- [ShieldActionResponse.none](none.md): An instruction that the system doesn’t need to take any additional action on behalf of the extension.
