> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhiddevice/handlestart](https://developer.apple.com/documentation/hiddriverkit/iouserhiddevice/handlestart)

# handleStart

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Performs any custom initialization associated with starting the device service.

## Declaration

```objectivec
virtual bool handleStart(IOService *provider);
```

## Parameters

- `provider`: The `IOService` provider for this object.

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if it wasn’t.

<a id="Discussion"></a>

## Discussion

When defining a custom service, override this method and use it to perform any custom initialization. For example, you might allocate memory for your service’s instance variables and store a reference to the provider object for later use. The default implementation of this method returns `true`, and performs no other actions.

Don’t call this method yourself. The [Start](start.md) method calls it when starting up the service.

## See Also

### Running the Service

- [Start](start.md): Starts the device service and associates it with the specified provider object.
