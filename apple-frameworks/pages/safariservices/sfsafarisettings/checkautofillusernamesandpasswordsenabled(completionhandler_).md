> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safariservices/sfsafarisettings/checkautofillusernamesandpasswordsenabled(completionhandler:)

# checkAutoFillUserNamesAndPasswordsEnabled(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Query the value of the Safari settings toggle for AutoFill \> User names and passwords

## Declaration

```swift
class func checkAutoFillUserNamesAndPasswordsEnabled(completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
class var isAutoFillUserNamesAndPasswordsEnabled: Bool { get async throws }
```

## Parameters

- `completionHandler`: The block the system calls after the operation complets, with a boolean parameter representing the toggle value.

  - **isEnabled**: A boolean value representing the current value of the toggle.
  - **error**: An SFSafariSettingsError if any occurred. If non-nil, the value of `isEnabled`

# checkAutoFillUserNamesAndPasswordsEnabledWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Query the value of the Safari settings toggle for AutoFill \> User names and passwords

## Declaration

```objectivec
+ (void) checkAutoFillUserNamesAndPasswordsEnabledWithCompletionHandler:(void (^)(BOOL isEnabled, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block the system calls after the operation complets, with a boolean parameter representing the toggle value.

  - **isEnabled**: A boolean value representing the current value of the toggle.
  - **error**: An SFSafariSettingsError if any occurred. If non-nil, the value of `isEnabled`
