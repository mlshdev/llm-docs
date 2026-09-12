> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471990-powerpc_toolbox_attribute_select](https://developer.apple.com/documentation/coreservices/1471990-powerpc_toolbox_attribute_select)

# PowerPC Toolbox Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for the PowerPC Toolbox.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltPPCToolboxAttr](1471990-powerpc_toolbox_attribute_select/gestaltppctoolboxattr.md): The selector you pass to the Gestalt function to determine the Program-to-Program Communication (PPC) Toolbox attributes. Note that these constants are defined as masks, not bit numbers.
- [gestaltPPCToolboxPresent](1471990-powerpc_toolbox_attribute_select/gestaltppctoolboxpresent.md)
- [gestaltPPCSupportsRealTime](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsrealtime.md)
- [gestaltPPCSupportsIncoming](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsincoming.md)
- [gestaltPPCSupportsOutGoing](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsoutgoing.md)
- [gestaltPPCSupportsTCP_IP](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportstcp_ip.md)
- [gestaltPPCSupportsIncomingAppleTalk](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsincomingappletalk.md)
- [gestaltPPCSupportsIncomingTCP_IP](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsincomingtcp_ip.md)
- [gestaltPPCSupportsOutgoingAppleTalk](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsoutgoingappletalk.md)
- [gestaltPPCSupportsOutgoingTCP_IP](1471990-powerpc_toolbox_attribute_select/gestaltppcsupportsoutgoingtcp_ip.md)
