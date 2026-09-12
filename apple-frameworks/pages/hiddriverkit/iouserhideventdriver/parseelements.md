> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/parseelements](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/parseelements)

# parseElements

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Parses the specified array of elements.

## Declaration

```objectivec
virtual bool parseElements(OSArray *elements);
```

## Parameters

- `elements`: An array of [IOHIDElement](../iohidelement.md) objects to parse.

<a id="return-value"></a>

## Return Value

`true` if parsing was successful, or `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method searches the elements array for [IOHIDElement](../iohidelement.md) objects relevant to keyboard, digitizer, pointer, scrolling, and LED events. It stores a reference to each relevant element it finds, and uses those objects later to obtain relevant information for events.

The driver’s [Start](start.md) method calls this method, so you don’t need to call it directly.

## See Also

### Parsing the Element Hierarchy

- [parsePointerElement](parsepointerelement.md): Parses an element to see if it supports pointer usages.
- [parseDigitizerElement](parsedigitizerelement.md): Parses an element to see if it supports digitizer usages.
- [parseKeyboardElement](parsekeyboardelement.md): Parses an element to see if it contains keyboard-related information.
- [parseScrollElement](parsescrollelement.md): Parses an element to see if it supports scroll usages.
- [parseLEDElement](parseledelement.md): Parses an element to see if it supports LED usages.
