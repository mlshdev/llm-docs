> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/moduleaid](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/moduleaid)

# moduleAID

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The module identifier of the package with which this instance is associated.

## Declaration

```swift
let moduleAID: Data
```

<a id="discussion"></a>

## Discussion

The combination of the package identifier and this identifier indicates what type the associated applet instance is.

## See Also

### Inspecting instance identifiers

- [instanceAID](instanceaid.md): The unique identifier for the applet instance.
- [packageAID](packageaid.md): The unique identifier of the package you use to install the instance.
