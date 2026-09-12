> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/packageaid](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/packageaid)

# packageAID

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The unique identifier of the package you use to install the instance.

## Declaration

```swift
let packageAID: Data
```

<a id="discussion"></a>

## Discussion

You can use the version encoded in this identifier to determine the version of the installed applet.

## See Also

### Inspecting instance identifiers

- [instanceAID](instanceaid.md): The unique identifier for the applet instance.
- [moduleAID](moduleaid.md): The module identifier of the package with which this instance is associated.
