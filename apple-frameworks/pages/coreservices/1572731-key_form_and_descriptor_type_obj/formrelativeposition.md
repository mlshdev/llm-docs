> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572731-key_form_and_descriptor_type_obj/formrelativeposition](https://developer.apple.com/documentation/coreservices/1572731-key_form_and_descriptor_type_obj/formrelativeposition)

# formRelativePosition

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
formRelativePosition = 'rele'
```

<a id="discussion"></a>

## Discussion

Specifies an element position either immediately before or immediately after a container, not inside it. The key data is specified by a descriptor of type `typeEnumerated` whose data consists of one of the constants `kAENext` and `kAEPrevious`, which are described in [AEDisposeToken](../1446783-aedisposetoken.md).
