> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/attachablevalue-vkrw](https://developer.apple.com/documentation/testing/attachment/attachablevalue-vkrw)

# attachableValue

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

The value of this attachment.

## Declaration

```swift
var attachableValue: AttachableValue.Wrapped { get }
```

<a id="discussion"></a>

## Discussion

When the attachable value’s type conforms to [AttachableWrapper](../attachablewrapper.md), the value of this property equals the wrapper’s underlying attachable value. To access the attachable value as an instance of `T` (where `T` conforms to [AttachableWrapper](../attachablewrapper.md)), specify the type explicitly:

```swift
let attachableValue = attachment.attachableValue as T
```
