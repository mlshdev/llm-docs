> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintent](https://developer.apple.com/documentation/intents/insnoozetasksintent)

# INSnoozeTasksIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A request to snooze one or more tasks.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSnoozeTasksIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSnoozeTasksIntent](insnoozetasksintent.md) object when the user marks one or more tasks for snoozing. The intent object can contain the task information.

To handle this intent, the handler object in your Intents extension must adopt the [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md) protocol. Your handler should confirm the request and create an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to snooze tasks in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Ignore my buy milk reminder | Snooze that reminder for 10 minutes |
| zh_CN | 忽略买牛奶的提醒事项 | 过10分钟后再提醒我这个 |
| zh_HK | 忽略買牛奶嘅提醒事項 | 延遲提醒事項10分鐘 |
| zh_TW | 忽略買牛奶的提醒事項 | 延後提醒事項10分鐘 |
| yue_CN | 忽略买牛奶嘅提醒事项 | 延迟提醒事项10分钟 |
| ar | تجاهل تذكير شراء الحليب | نبهني مرة ثانية بذلك التذكير بعد 10 دقائق |
| da | Ignorer min køb mælk påmindelse | Snooze den påmindelse i 10 minutter |
| de | Ignoriere meine Milch kaufen Erinnerung | Snooze die Erinnerung für 10 Minuten |
| es | Posponer mi recordatorio comprar leche | Pospón ese recordatorio por 10 minutos |
| fi | Hiljennä muistutus osta maitoa | Hiljennä muistutus kymmeneksi minuutiksi |
| fr | Ignore mon rappel pour acheter du lait | Rappelle-le moi encore dans 10 minutes |
| he | תתעלם מהתזכורת לקנות חלב | תשהי את התזכורת ב-10 דקות |
| it | Ignora il promemoria comprare il latte | Posticipa quel promemoria di 10 minuti |
| ja | 牛乳を買うというリマインダーを無視して | そのリマインダーを10分スヌーズして |
| ko | 우유 사기 미리 알림 다시  알려줘 | 이 미리 알림 10분동안 수느즈해줘 |
| ms | abaikan peringatan beli susu saya | tidurkan peringatan itu untuk 10 minit |
| nb | Ignorer min kjøpe melk påminnelse | Utsett den påminnelsen i 10 minutter |
| nl | Negeer de melk kopen herinnering | Sluimer die herinnering voor 10 minuten |
| pt | Ignorar meu lembrete para comprar leite | Adie aquele lembrete por 10 minutos |
| ru | Повтори напоминание купить молоко позже | Отложи это напоминание на 10 минут |
| sv | Ignorera min köp mjölk påminnelse | Snooza den påminnelsen i 10 minuter |
| th | เลื่อนเตือนซื้อนม | สนูซเตือนความจำอันนี้ไป 10 นาที |
| tr |  | Süt almayı 10 dakika sonra tekrar hatırlat |

## Topics

### Initializing the Intent Object

- [init(tasks:nextTriggerTime:all:)](insnoozetasksintent/init%28tasks_nexttriggertime_all_%29.md): Initializes the intent object with information about the tasks to snooze and when to snooze them.

### Getting the Task Information

- [nextTriggerTime](insnoozetasksintent/nexttriggertime.md): Deprecated. The next time after the current time that triggers a task to snooze.
- [tasks](insnoozetasksintent/tasks.md): Deprecated. An array of tasks to snooze.
- [all](insnoozetasksintent/all-spsb.md): A Boolean value that indicates whether to snooze all of the tasks.

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

### Task Deferral

- [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md): Deprecated. The handler interface that snoozes tasks in a task list.
- [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md): Deprecated. Your response to a delete tasks request.

# INSnoozeTasksIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A request to snooze one or more tasks.

> INSnoozeTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSnoozeTasksIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSnoozeTasksIntent](insnoozetasksintent.md) object when the user marks one or more tasks for snoozing. The intent object can contain the task information.

To handle this intent, the handler object in your Intents extension must adopt the [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md) protocol. Your handler should confirm the request and create an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object with the updated task information.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to snooze tasks in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Ignore my buy milk reminder | Snooze that reminder for 10 minutes |
| zh_CN | 忽略买牛奶的提醒事项 | 过10分钟后再提醒我这个 |
| zh_HK | 忽略買牛奶嘅提醒事項 | 延遲提醒事項10分鐘 |
| zh_TW | 忽略買牛奶的提醒事項 | 延後提醒事項10分鐘 |
| yue_CN | 忽略买牛奶嘅提醒事项 | 延迟提醒事项10分钟 |
| ar | تجاهل تذكير شراء الحليب | نبهني مرة ثانية بذلك التذكير بعد 10 دقائق |
| da | Ignorer min køb mælk påmindelse | Snooze den påmindelse i 10 minutter |
| de | Ignoriere meine Milch kaufen Erinnerung | Snooze die Erinnerung für 10 Minuten |
| es | Posponer mi recordatorio comprar leche | Pospón ese recordatorio por 10 minutos |
| fi | Hiljennä muistutus osta maitoa | Hiljennä muistutus kymmeneksi minuutiksi |
| fr | Ignore mon rappel pour acheter du lait | Rappelle-le moi encore dans 10 minutes |
| he | תתעלם מהתזכורת לקנות חלב | תשהי את התזכורת ב-10 דקות |
| it | Ignora il promemoria comprare il latte | Posticipa quel promemoria di 10 minuti |
| ja | 牛乳を買うというリマインダーを無視して | そのリマインダーを10分スヌーズして |
| ko | 우유 사기 미리 알림 다시  알려줘 | 이 미리 알림 10분동안 수느즈해줘 |
| ms | abaikan peringatan beli susu saya | tidurkan peringatan itu untuk 10 minit |
| nb | Ignorer min kjøpe melk påminnelse | Utsett den påminnelsen i 10 minutter |
| nl | Negeer de melk kopen herinnering | Sluimer die herinnering voor 10 minuten |
| pt | Ignorar meu lembrete para comprar leite | Adie aquele lembrete por 10 minutos |
| ru | Повтори напоминание купить молоко позже | Отложи это напоминание на 10 минут |
| sv | Ignorera min köp mjölk påminnelse | Snooza den påminnelsen i 10 minuter |
| th | เลื่อนเตือนซื้อนม | สนูซเตือนความจำอันนี้ไป 10 นาที |
| tr |  | Süt almayı 10 dakika sonra tekrar hatırlat |

## Topics

### Initializing the Intent Object

- [initWithTasks:nextTriggerTime:all:](https://developer.apple.com/documentation/intents/insnoozetasksintent/initwithtasks:nexttriggertime:all:): Deprecated. Initializes the intent object with information about the tasks to snooze and when to snooze them.

### Getting the Task Information

- [nextTriggerTime](insnoozetasksintent/nexttriggertime.md): Deprecated. The next time after the current time that triggers a task to snooze.
- [tasks](insnoozetasksintent/tasks.md): Deprecated. An array of tasks to snooze.
- [all](https://developer.apple.com/documentation/intents/insnoozetasksintent/all-62ujw): Deprecated. A Boolean value that indicates whether to snooze all of the tasks.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Task Deferral

- [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md): Deprecated. The handler interface that snoozes tasks in a task list.
- [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md): Deprecated. Your response to a delete tasks request.
