> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscpropnetsmbnetbiosnodetype-swift.var](https://developer.apple.com/documentation/systemconfiguration/kscpropnetsmbnetbiosnodetype-swift.var)

# kSCPropNetSMBNetBIOSNodeType (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The SMB key `NetBIOSNodeType`, whose value is of type `CFString`.

## Declaration

```swift
let kSCPropNetSMBNetBIOSNodeType: CFString
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetSMBNetBIOSNodeTypeBroadcast`, which has the value `Broadcast`
- `kSCValNetSMBNetBIOSNodeTypePeer`, which has the value `Peer`
- `kSCValNetSMBNetBIOSNodeTypeMixed`, which has the value `Mixed`
- `kSCValNetSMBNetBIOSNodeTypeHybrid`, which has the value `Hybrid`

## See Also

### Constants

- [kSCPropNetSMBNetBIOSName](kscpropnetsmbnetbiosname-swift.var.md): The SMB key `NetBIOSName`, whose value is of type `CFString`.
- [kSCPropNetSMBWINSAddresses](kscpropnetsmbwinsaddresses-swift.var.md): The SMB key `WINSAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetSMBWorkgroup](kscpropnetsmbworkgroup-swift.var.md): The SMB key `Workgroup`, whose value is of type `CFString`.

# kSCPropNetSMBNetBIOSNodeType (Objective-C)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The SMB key `NetBIOSNodeType`, whose value is of type `CFString`.

## Declaration

```objectivec
extern CFStringRef const kSCPropNetSMBNetBIOSNodeType;
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetSMBNetBIOSNodeTypeBroadcast`, which has the value `Broadcast`
- `kSCValNetSMBNetBIOSNodeTypePeer`, which has the value `Peer`
- `kSCValNetSMBNetBIOSNodeTypeMixed`, which has the value `Mixed`
- `kSCValNetSMBNetBIOSNodeTypeHybrid`, which has the value `Hybrid`

## See Also

### Constants

- [kSCPropNetSMBNetBIOSName](kscpropnetsmbnetbiosname-swift.var.md): The SMB key `NetBIOSName`, whose value is of type `CFString`.
- [kSCPropNetSMBNetBIOSScope](kscpropnetsmbnetbiosscope-c.var.md): Deprecated. The SMB key `NetBIOSScope`, whose value is of type `CFString`.
- [kSCPropNetSMBWINSAddresses](kscpropnetsmbwinsaddresses-swift.var.md): The SMB key `WINSAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetSMBWorkgroup](kscpropnetsmbworkgroup-swift.var.md): The SMB key `Workgroup`, whose value is of type `CFString`.
