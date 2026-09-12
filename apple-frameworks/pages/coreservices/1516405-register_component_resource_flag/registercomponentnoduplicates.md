> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516405-register_component_resource_flag/registercomponentnoduplicates](https://developer.apple.com/documentation/coreservices/1516405-register_component_resource_flag/registercomponentnoduplicates)

# registerComponentNoDuplicates

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
registerComponentNoDuplicates = 2
```

<a id="discussion"></a>

## Discussion

Specify this flag to indicate that if a component with identical characteristics to the one being registered already exists, then the new one should not be registered (`RegisterComponent` returns 0 in this situation). If you do not specify this flag, the component is registered even if a component with identical characteristics to the one being registered already exists.
