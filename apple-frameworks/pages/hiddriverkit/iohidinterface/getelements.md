> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidinterface/getelements](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/getelements)

# getElements

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns the array of elements that the interface uses to store  parsed report data.

## Declaration

```objectivec
virtual OSArray * getElements();
```

<a id="return-value"></a>

## Return Value

An array of [IOHIDElement](../iohidelement.md) objects containing the parsed data from the report.

<a id="Discussion"></a>

## Discussion

This method returns the array of [IOHIDElement](../iohidelement.md) objects associated with the interface. Each element contains data for a single aspect of the device’s state. For example, a report from a stylus contains separate elements for the horizontal and vertical position of the stylus, the pressure values, and so on. Use the [getUsagePage](../iohidelement/getusagepage.md) and [getUsage](../iohidelement/getusage.md) methods of the element to determine the type of information in each element.

This method creates a new set of `IOHIDElement` objects the first time you call it, but it doesn’t update the contents of each element automatically. Call the [processReport](processreport.md) method to update the contents of the elements before using this method to retrieve them.

## See Also

### Accessing the Elements of a Report

- [commitElements](commitelements.md): Gets or sets the contents of the interface’s stored elements.
