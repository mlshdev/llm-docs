> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/servicenotdeclared(_:)](https://developer.apple.com/documentation/wifiaware/waerror/servicenotdeclared(_:))

# WAError.serviceNotDeclared(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if your app didn’t declare the necessary services.

## Declaration

```swift
case serviceNotDeclared(WAError.ServiceNotDeclaredDetails)
```

<a id="discussion"></a>

## Discussion

This error indicates that your app declares services in the `Info.plist`.

## See Also

### Checking for undeclared services

- [WAError.ServiceNotDeclaredDetails](servicenotdeclareddetails.md): The optional details that describe the app service wasn’t declared.
