> Commit-pinned source for Vast.ai main: [host/sdk/self-test-machine.mdx](https://docs.vast.ai/host/sdk/self-test-machine)

# VastAI.self_test_machine

Perform a self-test on the specified machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.self_test_machine(
    machine_id: str,
    debugging: bool = False,
    explain: bool = False,
    raw: bool = False,
    url: str = "https://console.vast.ai",
    retry: int = 3,
    ignore_requirements: bool = False
) -> str
```

## Parameters

**Property (type: str; required)**

ID of the machine to self-test.

**Property (type: bool)**

Enable debug output during the test.

**Property (type: bool)**

Print verbose explanations of API calls made.

**Property (type: bool)**

Return raw JSON responses.

**Property (type: str)**

API server URL.

**Property (type: int)**

Number of retry attempts for failed API requests.

**Property (type: bool)**

Skip requirement checks during the test.

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.self_test_machine(machine_id="...")
print(result)
```
