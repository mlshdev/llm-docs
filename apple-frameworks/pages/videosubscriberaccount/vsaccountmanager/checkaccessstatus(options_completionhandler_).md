> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanager/checkaccessstatus(options:completionhandler:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanager/checkaccessstatus(options:completionhandler:))

# checkAccessStatus(options:completionHandler:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+

Checks your app’s access to user subscription information, and requests access if needed.

## Declaration

```swift
func checkAccessStatus(options: [VSCheckAccessOption : Any] = [:], completionHandler: @escaping @Sendable (VSAccountAccessStatus, (any Error)?) -> Void)
```

```swift
func checkAccessStatus(options: [VSCheckAccessOption : Any] = [:]) async throws -> VSAccountAccessStatus
```

## Parameters

- `options`: The options you use to check access status. For a list of possible options, see [VSCheckAccessOption](../vscheckaccessoption.md).
- `completionHandler`: The closure the account manager executes after it checks your app’s access status. This closure has no return value and takes the following parameters:

  - **accessStatus**: The access status of your app. For a list of possible values, see [VSAccountAccessStatus](../vsaccountaccessstatus.md).
  - **error**: An error object that contains information about a problem, or `nil` if the operation completed successfully.

## See Also

### Checking access status

- [VSCheckAccessOption](../vscheckaccessoption.md): The options your app uses when checking access status.
- [VSAccountAccessStatus](../vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.

# checkAccessStatusWithOptions:completionHandler: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · tvOS 10.0+ · visionOS 1.0+

Checks your app’s access to user subscription information, and requests access if needed.

## Declaration

```objectivec
- (void) checkAccessStatusWithOptions:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(VSAccountAccessStatus accessStatus, NSError *error)) completionHandler;
```

## Parameters

- `options`: The options you use to check access status. For a list of possible options, see [VSCheckAccessOption](../vscheckaccessoption.md).
- `completionHandler`: The closure the account manager executes after it checks your app’s access status. This closure has no return value and takes the following parameters:

  - **accessStatus**: The access status of your app. For a list of possible values, see [VSAccountAccessStatus](../vsaccountaccessstatus.md).
  - **error**: An error object that contains information about a problem, or `nil` if the operation completed successfully.

## See Also

### Checking access status

- [VSCheckAccessOption](../vscheckaccessoption.md): The options your app uses when checking access status.
- [VSAccountAccessStatus](../vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.
