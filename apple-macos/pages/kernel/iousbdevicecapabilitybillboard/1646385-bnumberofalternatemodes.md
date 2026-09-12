> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicecapabilitybillboard/1646385-bnumberofalternatemodes](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitybillboard/1646385-bnumberofalternatemodes)

# bNumberOfAlternateModes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The number of alternative supported modes.

## Declaration

```objectivec
uint8_t bNumberOfAlternateModes;
```

## See Also

### Getting the Properties

- [bLength](1646375-blength.md): The size of the descriptor.
- [bDescriptorType](1646372-bdescriptortype.md): The type of the descriptor.
- [bDevCapabilityType](1646365-bdevcapabilitytype.md): The device capability descriptor type.
- [iAdditionalInfoURL](1646386-iadditionalinfourl.md): The index of a string descriptor providing a URL for detailed information about the product and supported modes.
- [bPreferredAlternateMode](1646361-bpreferredalternatemode.md): The index of the preferred alternative mode.
- [vCONNPower](1646367-vconnpower.md): The power that the adapter needs for full functionality.
- [bmConfigured](1646380-bmconfigured.md): A value that indicates the state of the alternative modes.
- [bcdVersion](1792100-bcdversion.md): The billboard capability version number.
- [bAdditionalFailureInfo](1792101-badditionalfailureinfo.md): A value that indicates additional information on failures.
- [bReserved](1646357-breserved.md): Reserved for future use.
- [pAltConfigurations](1646374-paltconfigurations.md): An array of alternative configurations.
