> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsmanagedvalue/init(value:andowner:)](https://developer.apple.com/documentation/javascriptcore/jsmanagedvalue/init(value:andowner:))

# init(value:andOwner:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a managed value and associates it with an owner.

## Declaration

```swift
init!(value: JSValue!, andOwner owner: Any!)
```

## Parameters

- `value`: A JavaScript value.
- `owner`: The Objective-C or Swift object responsible for

<a id="return-value"></a>

## Return Value

A new managed value.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to creating a managed value and then reporting it to the JavaScriptCore virtual machine using the [addManagedReference(\_:withOwner:)](../jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method.

## See Also

### Creating a Managed Value

- [init(value:)](init%28value_%29.md): Initializes a managed value with the specified JavaScript value.

# managedValueWithValue:andOwner: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a managed value and associates it with an owner.

## Declaration

```objectivec
+ (JSManagedValue *) managedValueWithValue:(JSValue *) value andOwner:(id) owner;
```

## Parameters

- `value`: A JavaScript value.
- `owner`: The Objective-C or Swift object responsible for

<a id="return-value"></a>

## Return Value

A new managed value.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to creating a managed value and then reporting it to the JavaScriptCore virtual machine using the [addManagedReference:withOwner:](../jsvirtualmachine/addmanagedreference%28__withowner_%29.md) method.

## See Also

### Creating a Managed Value

- [initWithValue:](init%28value_%29.md): Initializes a managed value with the specified JavaScript value.
- [managedValueWithValue:](managedvaluewithvalue_.md): Creates a managed value with the specified JavaScript value.
