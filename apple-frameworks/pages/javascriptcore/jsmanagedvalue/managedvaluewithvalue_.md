> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsmanagedvalue/managedvaluewithvalue:](https://developer.apple.com/documentation/javascriptcore/jsmanagedvalue/managedvaluewithvalue:)

# managedValueWithValue:

**Interface language:** Objective-C

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a managed value with the specified JavaScript value.

## Declaration

```objectivec
+ (JSManagedValue *) managedValueWithValue:(JSValue *) value;
```

## Parameters

- `value`: A JavaScript value.

<a id="return-value"></a>

## Return Value

A new managed value.

<a id="Discussion"></a>

## Discussion

To ensure that the underlying JavaScript value is retained as long as the managed value remains in use in the Objective-C or Swift runtime, report the managed value’s owner to the JavaScriptCore virtual machine using the [addManagedReference:withOwner:](../jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method.

## See Also

### Creating a Managed Value

- [initWithValue:](init%28value_%29.md): Initializes a managed value with the specified JavaScript value.
- [managedValueWithValue:andOwner:](init%28value_andowner_%29.md): Creates a managed value and associates it with an owner.
