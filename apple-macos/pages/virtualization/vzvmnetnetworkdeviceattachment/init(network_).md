> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvmnetnetworkdeviceattachment/init(network:)](https://developer.apple.com/documentation/virtualization/vzvmnetnetworkdeviceattachment/init(network:))

# init(network:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates the attachment and configures it with the specified data.

## Declaration

```swift
init(network: vmnet_network_ref)
```

## Parameters

- `network`: The logical network object

<a id="return-value"></a>

## Return Value

An initialized `VZVmnetNetworkDeviceAttachment` object, or `nil` if there was an error.

<a id="Discussion"></a>

## Discussion

To ensure proper isolation between application processes, a virtual machine (VM) can only use the `network` that the same application process creates. If an application’s VM tries to use a `network` that another application’s VM creates, initialization fails.

For more information on vmnet configuration requirements and restrictions, see [vmnet](../../vmnet.md)

The following example demonstrates how to create and initialize a custom network using `VZVmnetNetworkDeviceAttachment`.

**Swift**

```swift

let status = UnsafeMutablePointer<vmnet_return_t>.allocate(capacity: 1)
let network_configuration = vmnet_network_configuration_create(operating_modes_t.VMNET_SHARED_MODE, status);
if (network_configuration == nil) {
    // Handle error return `status`.
}

let network = vmnet_network_create(network_configuration!, status)
if (network == nil) {
    // Handle error return `status`.
}

let virtioNetworkDevice = VZVirtioNetworkDeviceConfiguration()
virtioNetworkDevice.attachment = try! VZVmnetNetworkDeviceAttachment(network: network!)       

```

**Objective-C**

```Objective-C

vmnet_return_t status;
auto network_configuration = vmnet_network_configuration_create(VMNET_SHARED_MODE, &status);
if (!network_configuration) {
    // Handle error return `status`.
}

auto network = vmnet_network_create(network_configuration, &status);
if (!network) {
    // Handle error return `status`.
}

VZVmnetNetworkDeviceAttachment *attachment = [[VZVmnetNetworkDeviceAttachment alloc] initWithNetwork:network];

VZVirtioNetworkDeviceConfiguration virtioNetworkDevice = [[VZVirtioNetworkDeviceConfiguration alloc] init];
virtioNetworkDevice.attachment = attachment;       

```

## See Also

### Creating the vmnet network device attachment

- [network](network.md): The network object that the you initialize the attachment with.

# initWithNetwork: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Creates the attachment and configures it with the specified data.

## Declaration

```objectivec
- (instancetype) initWithNetwork:(vmnet_network_ref) network;
```

## Parameters

- `network`: The logical network object

<a id="return-value"></a>

## Return Value

An initialized `VZVmnetNetworkDeviceAttachment` object, or `nil` if there was an error.

<a id="Discussion"></a>

## Discussion

To ensure proper isolation between application processes, a virtual machine (VM) can only use the `network` that the same application process creates. If an application’s VM tries to use a `network` that another application’s VM creates, initialization fails.

For more information on vmnet configuration requirements and restrictions, see [vmnet](../../vmnet.md)

The following example demonstrates how to create and initialize a custom network using `VZVmnetNetworkDeviceAttachment`.

**Swift**

```swift

let status = UnsafeMutablePointer<vmnet_return_t>.allocate(capacity: 1)
let network_configuration = vmnet_network_configuration_create(operating_modes_t.VMNET_SHARED_MODE, status);
if (network_configuration == nil) {
    // Handle error return `status`.
}

let network = vmnet_network_create(network_configuration!, status)
if (network == nil) {
    // Handle error return `status`.
}

let virtioNetworkDevice = VZVirtioNetworkDeviceConfiguration()
virtioNetworkDevice.attachment = try! VZVmnetNetworkDeviceAttachment(network: network!)       

```

**Objective-C**

```Objective-C

vmnet_return_t status;
auto network_configuration = vmnet_network_configuration_create(VMNET_SHARED_MODE, &status);
if (!network_configuration) {
    // Handle error return `status`.
}

auto network = vmnet_network_create(network_configuration, &status);
if (!network) {
    // Handle error return `status`.
}

VZVmnetNetworkDeviceAttachment *attachment = [[VZVmnetNetworkDeviceAttachment alloc] initWithNetwork:network];

VZVirtioNetworkDeviceConfiguration virtioNetworkDevice = [[VZVirtioNetworkDeviceConfiguration alloc] init];
virtioNetworkDevice.attachment = attachment;       

```

## See Also

### Creating the vmnet network device attachment

- [network](network.md): The network object that the you initialize the attachment with.
