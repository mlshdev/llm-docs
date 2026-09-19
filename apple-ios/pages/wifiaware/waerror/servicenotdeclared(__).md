> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/servicenotdeclared(_:)

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
