> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintent](https://developer.apple.com/documentation/intents/indeletetasksintent)

# INDeleteTasksIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A request to delete one or more tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INDeleteTasksIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INDeleteTasksIntent](indeletetasksintent.md) object when the user marks one or more tasks for deletion. The intent object can contain the task information.

To handle this intent, the handler object in your Intents extension must adopt the [INDeleteTasksIntentHandling](indeletetasksintenthandling.md) protocol. Your handler should confirm the request and create an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to delete tasks in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Remove my buy milk reminder | Delete all my reminders |
| zh_CN | 删除买牛奶的提醒事项 | 删除全部提醒事项 |
| zh_HK | 刪除買牛奶嘅提醒事項 | 刪除全部提醒事項 |
| zh_TW | 刪除買牛奶的提醒事項 | 刪除所有提醒事項 |
| yue_CN | 删除买牛奶嘅提醒事项 | 删除全部提醒事项 |
| ar | مسح تذكير شراء الحليب | مسح جميع التذكيرات |
| da | Fjern min køb mælk påmindelse | Slet alle mine påmindelser |
| de | Entferne meine Milch kaufen Erinnerung | Lösche alle meine Erinnerungen |
| es | Elimina mi recordatorio comprar leche | Elimina todos mis recordatorios |
| fi | Poista muistutus osta maitoa | Poista kaikki muistutukset |
| fr | Efface mon rappel pour acheter du lait | Supprime tous mes rappels |
| he | תמחק את התזכורת לקנות חלב | תמחקי את כל התזכורות שלי |
| it | Rimuovi il promemoria comprare il latte | Elimina tutti i miei promemoria |
| ja | 牛乳を買うというリマインダーを削除して | リマインダーを全部削除して |
| ko | 우유 사기 미리 알림 지워 | 모든 미리 알림 삭제해 |
| ms | Padamkan peringatan beli susu saya | Padamkan semua peringatan saya |
| nb | Fjern min kjøpe melk påminnelse | Slett alle påminnelsene mine |
| nl | Verwijder melk kopen herinnering | Wis al mijn herinneringen |
| pt | Remova o lembrete comprar leite | Remover todos os meus lembretes |
| ru | Удали моё напоминание купить молоко | Удали все мои напоминания |
| sv | Ta bort min köp mjölk påminnelse | Radera alla mina påminnelser |
| th | ลบเตือนความจำซื้อนม | ลบเตือนความจำทั้งหมด |
| tr | Süt al anımsatıcımı kaldır | Tüm hatırlatmalarımı sil |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [init(taskList:tasks:all:)](indeletetasksintent/init%28tasklist_tasks_all_%29.md): Deprecated. Creates the intent object with information about the task list and the tasks to delete from it.

### Getting the Task Information

- [taskList](indeletetasksintent/tasklist.md): Deprecated. The task list from which to delete tasks.
- [tasks](indeletetasksintent/tasks.md): Deprecated. The tasks to delete from a task list.
- [all](indeletetasksintent/all-8gg59.md): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.

# INDeleteTasksIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A request to delete one or more tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INDeleteTasksIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INDeleteTasksIntent](indeletetasksintent.md) object when the user marks one or more tasks for deletion. The intent object can contain the task information.

To handle this intent, the handler object in your Intents extension must adopt the [INDeleteTasksIntentHandling](indeletetasksintenthandling.md) protocol. Your handler should confirm the request and create an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to delete tasks in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Remove my buy milk reminder | Delete all my reminders |
| zh_CN | 删除买牛奶的提醒事项 | 删除全部提醒事项 |
| zh_HK | 刪除買牛奶嘅提醒事項 | 刪除全部提醒事項 |
| zh_TW | 刪除買牛奶的提醒事項 | 刪除所有提醒事項 |
| yue_CN | 删除买牛奶嘅提醒事项 | 删除全部提醒事项 |
| ar | مسح تذكير شراء الحليب | مسح جميع التذكيرات |
| da | Fjern min køb mælk påmindelse | Slet alle mine påmindelser |
| de | Entferne meine Milch kaufen Erinnerung | Lösche alle meine Erinnerungen |
| es | Elimina mi recordatorio comprar leche | Elimina todos mis recordatorios |
| fi | Poista muistutus osta maitoa | Poista kaikki muistutukset |
| fr | Efface mon rappel pour acheter du lait | Supprime tous mes rappels |
| he | תמחק את התזכורת לקנות חלב | תמחקי את כל התזכורות שלי |
| it | Rimuovi il promemoria comprare il latte | Elimina tutti i miei promemoria |
| ja | 牛乳を買うというリマインダーを削除して | リマインダーを全部削除して |
| ko | 우유 사기 미리 알림 지워 | 모든 미리 알림 삭제해 |
| ms | Padamkan peringatan beli susu saya | Padamkan semua peringatan saya |
| nb | Fjern min kjøpe melk påminnelse | Slett alle påminnelsene mine |
| nl | Verwijder melk kopen herinnering | Wis al mijn herinneringen |
| pt | Remova o lembrete comprar leite | Remover todos os meus lembretes |
| ru | Удали моё напоминание купить молоко | Удали все мои напоминания |
| sv | Ta bort min köp mjölk påminnelse | Radera alla mina påminnelser |
| th | ลบเตือนความจำซื้อนม | ลบเตือนความจำทั้งหมด |
| tr | Süt al anımsatıcımı kaldır | Tüm hatırlatmalarımı sil |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension handles the request.

## Topics

### Initializing the Intent Object

- [initWithTaskList:tasks:all:](https://developer.apple.com/documentation/intents/indeletetasksintent/initwithtasklist:tasks:all:): Deprecated. Initializes the intent object with information about the task list and the tasks to delete from it.

### Getting the Task Information

- [taskList](indeletetasksintent/tasklist.md): Deprecated. The task list from which to delete tasks.
- [tasks](indeletetasksintent/tasks.md): Deprecated. The tasks to delete from a task list.
- [all](https://developer.apple.com/documentation/intents/indeletetasksintent/all-1dt4g): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.
