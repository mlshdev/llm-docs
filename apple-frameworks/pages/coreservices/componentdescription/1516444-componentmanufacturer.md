> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentdescription/1516444-componentmanufacturer](https://developer.apple.com/documentation/coreservices/componentdescription/1516444-componentmanufacturer)

# componentManufacturer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A four-character code that identifies the manufacturer of the component.

## Declaration

```objectivec
OSType componentManufacturer;
```

<a id="discussion"></a>

## Discussion

The [componentManufacturer](1516444-componentmanufacturer.md) field allows for further differentiation between individual components. For example, components made by a specific manufacturer may support an extended feature set. Components provided by Apple use a manufacturer value of `appl`.

If you are developing an application that uses components, you can use this field to find components from a certain manufacturer. Specify the appropriate manufacturer code in this field of the component description structure you supply to the [FindNextComponent](../1516552-findnextcomponent.md) or [CountComponents](../1516515-countcomponents.md) function. A value of `0` operates as a wildcard.

If you are developing a component, you obtain your manufacturer code, which can be the same as your application signature, from Apple’s Component Registry Group.
