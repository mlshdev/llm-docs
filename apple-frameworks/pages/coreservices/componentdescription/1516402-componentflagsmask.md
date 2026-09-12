> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentdescription/1516402-componentflagsmask](https://developer.apple.com/documentation/coreservices/componentdescription/1516402-componentflagsmask)

# componentFlagsMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A 32-bit field that indicates which flags in the `componentFlags` field are relevant to a particular component search operation.

## Declaration

```objectivec
UInt32 componentFlagsMask;
```

<a id="discussion"></a>

## Discussion

If you are developing an application that uses components, your application should set each bit that corresponds to a flag in the [componentFlags](1516652-componentflags.md) field that is to be considered as a search criterion by the [FindNextComponent](../1516552-findnextcomponent.md) or [CountComponents](../1516515-countcomponents.md) function to `1`. The Component Manager considers only these flags during the search. You specify the desired flag value (either `0` or `1`) in the [componentFlags](1516652-componentflags.md) field. 

For example, to look for a component with a specific control flag that is set to `0`, set the appropriate bit in the [componentFlags](1516652-componentflags.md) field to `0` and the same bit in the [componentFlagsMask](1516402-componentflagsmask.md) field to `1`. To look for a component with a specific control flag that is set to `1`, set the bit in the [componentFlags](1516652-componentflags.md) field to `1` and the same bit in the [componentFlagsMask](1516402-componentflagsmask.md) field to `1`. To ignore a flag, set the bit in the [componentFlagsMask](1516402-componentflagsmask.md) field to `0`.

If you are developing a component, your component must set the [componentFlagsMask](1516402-componentflagsmask.md) field in its component description structure to `0`.
