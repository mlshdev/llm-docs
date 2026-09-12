> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentdescription/1516652-componentflags](https://developer.apple.com/documentation/coreservices/componentdescription/1516652-componentflags)

# componentFlags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A 32-bit field that provides additional information about a particular component.

## Declaration

```objectivec
UInt32 componentFlags;
```

<a id="discussion"></a>

## Discussion

The high-order 8 bits are reserved for definition by the Component Manager. If you are developing an application, you should usually set these bits to `0`.

The low-order 24 bits are specific to each component type. These flags can be used to indicate the presence of features or capabilities in a given component.

If you are developing an application that uses components, you can use these flags to further narrow the search criteria applied by the [FindNextComponent](../1516552-findnextcomponent.md) or [CountComponents](../1516515-countcomponents.md) function. If you use the [componentFlags](1516652-componentflags.md) field in a component search, you use the [componentFlagsMask](1516402-componentflagsmask.md) field to indicate which flags are to be considered in the search.

If you are developing a component, you can use these flags to indicate any special capabilities or features of your component. You may use all 24 bits, as appropriate to its component type. You must set all unused bits to `0`.
